import * as React from 'react';
import { List } from 'react-native-paper';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section style={{
        backgroundColor: 'white'
    }} 
    title="Transactions To Review">
      <List.Item
        title="Udapi"
        description="500"
        left={props => <List.Icon {...props} icon="folder" />}
    />
    <List.Item
        title="CP"
        description="200"
        left={props => <List.Icon {...props} icon="calendar" />}
    />
    </List.Section>
  );
};

export default MyComponent;