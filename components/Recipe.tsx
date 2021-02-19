
import React from 'react';
import styled from 'styled-components/native';
import { Title, Subtitle, Paragraph} from "./Typography";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const Content = styled.View`
  padding: 0 20px;
  margin-bottom: 50px;
`;

const Space = styled.View`
  margin-bottom: ${({size} : {size?:1|2|3}) => ((size ?? 2) * 10) + 'px' };
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
  recipeImage: string
}

export default function Recipe({title,category,ingredients,quantity,preparingDescription,recipeImage} : recipeProps) {

  return(
    <ScrollView style={{width:deviceWidth}} showsVerticalScrollIndicator={false}>
        <MainImage source={{uri: recipeImage}}>
          <LinearGradient colors={['transparent', 'transparent', '#fff']} style={{width:'100%', height:'100%'}}/>
        </MainImage>
        <Space/>
        <Content>
          <Title>{title}</Title>
          { category && <Subtitle secondary>{ category } </Subtitle>}
          {/* <Line/> */}
          <Space size={3}/>

            <Subtitle>Ingredients</Subtitle>
            <Space size={1}/>
            {
              ingredients.map((ingredient,index) => 
                <IngredientsList key={index}>
                  <Paragraph>{ingredient}</Paragraph>
                  { quantity[index] && <Paragraph secondary>{quantity[index]}</Paragraph>}
                </IngredientsList>
              )
            }
            <Space/>
            <Subtitle>Prepare</Subtitle>
            <Space size={1}/>
            <Paragraph>
            {preparingDescription}
            </Paragraph>
        </Content>

      </ScrollView>
  )
}