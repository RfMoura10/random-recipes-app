
import React, { useRef, useState } from 'react';
import styled from 'styled-components/native';
import { Title, Subtitle, Paragraph} from "./Typography";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, Dimensions, TouchableOpacity, View, Linking } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-easy-toast'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const Content = styled.View`
  padding: 0 20px;
  margin-bottom: 50px;
`;

const Space = styled.View`
  margin-bottom: ${({size} : {size?:1|2|3}) => ((size ?? 3) * 10) + 'px' };
`;

const Line = styled.View`
  height: 3px;
  width: 100%;
  background-color: #DF8320;
  opacity: .3;
`;

const IngredientsList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
`
const MainImage = styled.ImageBackground`
  height: ${Math.floor(deviceHeight * .35)+'px'};
  width: 100%;
`;

type recipeProps = {
  title: string,
  category?: string,
  ingredients: string[],
  quantity: string[],
  preparingDescription: string,
  recipeImage: string,
  recipeLink?: string
}

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export default function Recipe({title,category,ingredients,quantity,preparingDescription,recipeImage, recipeLink} : recipeProps) {
  const [bigText, isBigText] = useState<boolean>(false)
  const [saved, setSaved] = useState<boolean>(false)
  let toastRef = useRef<any>(null)

  return (
    <ScrollView style={{width:deviceWidth}} showsVerticalScrollIndicator={false}>
        <MainImage source={{uri: recipeImage}}>
          <LinearGradient colors={['transparent', 'transparent', '#fff']} style={{width:'100%', height:'100%'}}/>
          {recipeLink &&
          <TouchableOpacity 
            style={{flex:1, marginTop:-250, justifyContent:"center", alignItems:"center"}}
            onPress={() => Linking.openURL(recipeLink)}
          > 
            <AntDesign name="playcircleo" size={100} color="rgba(255,255,255,.7)" />
          </TouchableOpacity>}
        </MainImage>
        <Space/>
        <Content>
          <Title big={bigText}>{title}</Title>

            <Row>
              {category && <Subtitle secondary big={bigText} grow>{ category } </Subtitle>}
                <TouchableOpacity onPress={()=>isBigText(prev => !prev)} style={{marginRight:30, transform:[{ scaleX: bigText ? -1 : 1 }]}}>
                  <Octicons name="text-size" size={28} color="#DF8320" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  setSaved(prev => !prev) 
                  !saved && toastRef.current.show('Saved!')
                }}>
                  <FontAwesome name={saved ? "bookmark" : "bookmark-o"} size={28} color="#DF8320" />
                </TouchableOpacity>
            </Row>
            <Space size={1}/>
            <Line/>
          <Space/>

            <Subtitle big={bigText}>Ingredients</Subtitle>
            <Space size={1}/>
            {
              ingredients.map((ingredient,index) => 
                <IngredientsList key={index}>
                  <Paragraph big={bigText}>{ingredient}</Paragraph>
                  { quantity[index] && <Paragraph secondary big={bigText}>{quantity[index]}</Paragraph>}
                </IngredientsList>
              )
            }
            <Space/>
            <Subtitle big={bigText}>Prepare</Subtitle>
            <Space size={1}/>
            <Paragraph big={bigText}>
            {preparingDescription}
            </Paragraph>
            <Toast ref={toastRef} position='top'/>
        </Content>
      </ScrollView>
  )
}