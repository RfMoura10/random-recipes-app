
import React from 'react';
import styled from 'styled-components/native';
import { Title, Subtitle, Paragraph} from "./Typography";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width

const Content = styled.View`
  padding: 0 20px;
  margin-bottom: 50px;
`;

const Space = styled.View`
  margin-bottom: ${({size} : {size?:1|2}) => ((size ?? 2) * 10) + 'px' };
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
  height: 250px;
  width: 100%;
`;

export default function Recipe() {

  return(
    <ScrollView style={{width:deviceWidth}} showsVerticalScrollIndicator={false}>
        <MainImage source={{uri: 'https://www.themealdb.com/images/media/meals/1550440197.jpg'}}>
          <LinearGradient colors={['transparent', 'transparent', '#fff']} style={{width:'100%', height:'100%'}}/>
        </MainImage>
        <Space/>
        <Content>
          <Title>Chicken Couscou</Title>
          <Line/>
          <Space/>

            <Subtitle>Ingredients</Subtitle>
            <Space size={1}/>
            {
              [...Array(10).fill(0)].map((_,i) => 
                <IngredientsList key={i}>
                  <Paragraph>Olive Oil </Paragraph>
                  <Paragraph secondary>1 chopped </Paragraph>
                </IngredientsList>
              )
            }
            <Space/>
            <Subtitle>Prepare</Subtitle>
            <Space size={1}/>
            <Paragraph>
            First make the Hollandaise sauce. Put the lemon juice and vinegar in a small bowl, add the egg yolks and whisk with a balloon whisk until light and frothy. Place the bowl over a pan of simmering water and whisk until mixture thickens. Gradually add the butter, whisking constantly until thick – if it looks like it might be splitting, then whisk off the heat for a few mins. Season and keep warm.\r\n\r\nTo poach the eggs, bring a large pan of water to the boil and add the vinegar. Lower the heat so that the water is simmering gently. Stir the water so you have a slight whirlpool, then slide in the eggs one by one. Cook each for about 4 mins, then remove with a slotted spoon.\r\n\r\nLightly toast and butter the muffins, then put a couple of slices of salmon on each half. Top each with an egg, spoon over some Hollandaise and garnish with chopped chives.
            </Paragraph>
        </Content>

      </ScrollView>
  )
}