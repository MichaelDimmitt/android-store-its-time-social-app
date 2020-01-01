import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Content, Container, Header, Title, Button, Left, Right, Body, Icon, Tab, Tabs, ScrollableTab } from 'native-base';
import {
    Drawer, Button, DatePicker, IconNB, Icon,
    Header, Form, InputGroup, Input,Title, Fab,
    Left, Right, Body,
    Badge,CheckBox, Radio,
    Thumbnail, Card, CardItem,
    Spinner, Switch, Container, Toast,
    H1, H2, H3, Content, Footer, Tab, Tabs, FooterTab, Picker,
    List, ListItem, Separator, DeckSwiper, Item, Subtitle, Label, Textarea, Col,
    Row, Grid, Text,
    TabContent, View, ScrollableTab, ActionSheet, TabHeading, TabContainer, DefaultTabBar,
    Segment, Root, SwipeRow, Accordion,
    /* mapPropsToStyleNames, VueNativeBase getTheme, variables, StyleProvider, connectStyle,*/
} from 'native-base';
import SvgUri from 'react-native-svg-uri';


export const TestSvgUri = () => (
    // <SvgUri width="200" height="200"
    //   source={ __DEV__
    //       ? { uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg' } //development
    //       : require('../assets/images/nope.svg') //production
    // }/>
);

export const TabComp = () => (
  <Button />
)

export const NewLines = () => (
  <View>
    <Text >

    </Text>
    <Text >

    </Text>
    <Text >

    </Text>
    <Text >

    </Text>
  </View>
)
