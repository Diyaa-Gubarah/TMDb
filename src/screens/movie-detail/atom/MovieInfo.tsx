import {NativeText} from '../../../components';
import React from 'react';
import {View} from 'react-native';
import {useTheme} from '../../../hooks';

type MovieInfoProps = {
  title: string;
  releaseDate: string;
  originalLanguage: string;
  overview: string;
};

const MovieInfo: React.FC<MovieInfoProps> = ({
  title,
  releaseDate,
  originalLanguage,
  overview,
}) => {
  const {theme} = useTheme();

  return (
    <View style={{padding: theme.spacing.lg}}>
      <NativeText align="left" size="lg" family="bold" color="textPrimary">
        {title}
      </NativeText>
      <NativeText
        align="left"
        size="sm"
        color="textSecondary">{`${releaseDate} , ${originalLanguage}`}</NativeText>
      <NativeText size="md" color="textPrimary" align="justify" family="light">
        {overview}
      </NativeText>
    </View>
  );
};

export default React.memo(MovieInfo);
