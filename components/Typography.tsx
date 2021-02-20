import * as React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

type FontProps = {
  children: React.ReactNode,
  secondary?: boolean,
  big?: boolean,
  grow?: boolean
}

export function Title({children, big} : FontProps) {
    const [loaded] = useFonts({
      BioRhyme: require('../assets/fonts/BioRhyme-Bold.ttf'),
    });
    
    if (!loaded) {
      return null;
    }
  
    return <>
        <Text style={{ fontFamily: 'BioRhyme', fontSize: 24 * (big ? 2 : 1), textAlign:"left", color:'#DF8320' }}>
            { children }
        </Text>
    </>;
  }

export function Subtitle({children, big, secondary, grow} : FontProps) {
    const [loaded] = useFonts({
      BioRhyme: require('../assets/fonts/BioRhyme-Bold.ttf'),
    });
    
    if (!loaded) {
      return null;
    }
  
    return <>
        <Text style={{ 
          fontFamily: 'BioRhyme', 
          fontSize: 16 * (big ? 2 : 1), 
          textAlign:"left", 
          color:"#000", 
          opacity: secondary ? .3 : .8, 
          flex: grow && 2}}>
            { children }
        </Text>
    </>;
  }

export function Paragraph({children, big, secondary} : FontProps) {
    const [loaded] = useFonts({
      Cabin: require('../assets/fonts/Cabin-Bold.ttf'),
    });
    
    if (!loaded) {
      return null;
    }
  
    return <>
        <Text style={{ 
          fontFamily: 'Cabin', 
          fontSize: 14 * (big ? 2 : 1), 
          textAlign:"left", 
          lineHeight: (14 * (big ? 2 : 1)) * 1.5, 
          color:"#000", 
          opacity: secondary ? .5 : .8 
        }}>
            { children }
        </Text>
    </>;
  }