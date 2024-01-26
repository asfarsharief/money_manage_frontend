import {React, useState} from "react";
import { View, Linking } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";
import MyComponent from "../components/List";
import CircularProgress from 'react-native-circular-progress-indicator';
import { Card,Title } from "react-native-paper";


export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const {currentMoneyStatus, setCurrentMoneyStatus} = useState("All your money is with you!")
  setTheme("dark")
  return (
    <Layout>
      <Card>
        <Section>
          <SectionContent>
            <Text fontWeight="bold">
              Hey Asfar
            </Text>
          </SectionContent>
        </Section>
      </Card>
      <View style={{
        //   flex: 1,
          alignItems: "center",
          marginHorizontal: 20,
        }} >
            {/* <Card.Content>
                <Title>{currentMoneyStatus}</Title>
            </Card.Content> */}
        <Button
            style={{ marginTop: 10 }}
            text="You owe 8,888"
            status="info"
        />
      </View>
      <View style={{
        // flex:2,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20
        }}>
      <CircularProgress
        value={60}
        radius={120}
        duration={2000}
        valuePrefix={'₹'}
        title={'Money Spent'}
        activeStrokeWidth={12}
        titleStyle={{fontWeight: 'bold'}}
        />
      </View>
      <View style={{
        //   flex: 3,
          alignItems: "center",
          marginHorizontal: 20,
        }} >
      <Button
            style={{ marginTop: 10 }}
            text="Income: 80000"
            status="info"
        />
         <Button
            style={{ marginTop: 10 }}
            text="Budget: 30000"
            status="info"
        />
      </View>
      <View style={{
        // flex:4,
        marginHorizontal: 20,
        }}>
            <MyComponent/>
        </View>
    </Layout>
  );
}

