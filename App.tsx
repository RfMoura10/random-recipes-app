import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Dimensions, View } from 'react-native';
import Recipe from './components/Recipe'
import RecipeSkeleton from './components/RecipeSkeleton';
import { Paragraph } from './components/Typography';
import getAllInArray from './utils/ArrayUtils';

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

type RecipeObject = {
  title: string,
  category: string,
  ingredients?: string[],
  quantity?: string[],
  preparingDescription: string,
  recipeImage: string,
  recipeLink?: string
}

export default function App() {
  const [recipes,setRecipes] = useState<RecipeObject[]>([])
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    (async() => {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

      res.json().then(r => {
        r.meals?.map((m : any, i : number) => setRecipes(prev => [...prev,{
          title: m?.strMeal,
          category: m?.strCategory,
          ingredients: getAllInArray(m,"strIngredient").filter(ing => ing),
          quantity: getAllInArray(m,"strMeasure").filter(mes => mes),
          preparingDescription: m?.strInstructions,
          recipeImage: m?.strMealThumb,
          recipeLink: m?.strYoutube
        }]))
        setLoaded(true)
    })
    })()
  }, [])

  return (
    <SafeAreaView style={{flex:1}}>
      {
        loaded ? (
          <ScrollView style={{width:deviceWidth}} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
            {
              recipes.map((r:any, i:number) => (
                <Recipe key={i}
                  title={r?.title}
                  category={r?.category}
                  ingredients={r?.ingredients}
                  quantity={r?.quantity}
                  preparingDescription={r?.preparingDescription}
                  recipeImage={r?.recipeImage}
                  recipeLink={r?.recipeLink}
                />
              ))
            }
          <RecipeSkeleton width={deviceWidth} height={deviceHeight}/>
          </ScrollView>
        ) : (
          <RecipeSkeleton width={deviceWidth} height={deviceHeight}/>
        )
      }
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
