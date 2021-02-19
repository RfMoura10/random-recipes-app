import * as React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode
}

type Props2 = {
  children: React.ReactNode,
  secondary?: boolean
}

export function Title({children} : Props) {
    const [loaded] = useFonts({
      BioRhyme: require('../assets/fonts/BioRhyme-Bold.ttf'),
    });
    
    if (!loaded) {
      return null;
    }
  
    return <>
        <Text style={{ fontFamily: 'BioRhyme', fontSize: 24, textAlign:"left", color:'#DF8320' }}>
            { children }
        </Text>
    </>;
  }

export function Subtitle({children, secondary} : Props2) {
    const [loaded] = useFonts({
      BioRhyme: require('../assets/fonts/BioRhyme-Bold.ttf'),
    });
    
    if (!loaded) {
      return null;
    }
  
    return <>
        <Text style={{ fontFamily: 'BioRhyme', fontSize: 16, textAlign:"left", color:"#000", opacity: secondary ? .3 : .8 }}>
            { children }
        </Text>
    </>;
  }

export function Paragraph({children, secondary} : Props2) {
    const [loaded] = useFonts({
      Cabin: require('../assets/fonts/Cabin-Bold.ttf'),
    });
    
    if (!loaded) {
      return null;
    }
  
    return <>
        <Text style={{ fontFamily: 'Cabin', fontSize: 14, textAlign:"left", lineHeight:21, color:"#000", opacity: secondary ? .5 : .8 }}>
            { children }
        </Text>
    </>;
  }