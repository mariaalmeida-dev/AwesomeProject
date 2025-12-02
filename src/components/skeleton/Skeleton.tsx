import React from 'react';
import { View, ViewStyle } from 'react-native';
import Shimmer from './Shimmer';

interface SkeletonProps {
    width?: number | string;
    height?: number | string;
    radius?: number;
    style?: ViewStyle;
}

export default function Skeleton({
                                     width = '100%',
                                     height = 20,
                                     radius = 8,
                                     style,
                                 }: SkeletonProps) {
    return (
        <View
            style={[
                {
                    width,
                    height,
                    borderRadius: radius,
                    backgroundColor: '#333',
                    overflow: 'hidden',
                },
                style,
            ]}
        >
            <Shimmer />
        </View>
    );
}
