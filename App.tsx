import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image} from 'react-native';

const StoryFillerApp: React.FC = () => {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [word3, setWord3] = useState('');
  const [word4, setWord4] = useState('');
  const [word5, setWord5] = useState('');
  const [story, setStory] = useState('');

  const generateStory = () => {
    const newStory = `Once upon a time there was a ${word1} knight named ${word2}. 
    ${word2} was known for their incredible ${word3} skills and their magical ${word4}. 
    One day, they embarked on a journey to travel to ${word5}, which was said to be filled with 3 wishes. 
    After a long and challenging adventure, ${word2} finally found ${word5} and made a wish for world peace.`;
    setStory(newStory);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <Image source={require('StoryFiller/image/story.jpg')} style={styles.image} />
       <Text style={styles.header}>Create Your Story</Text> 
       <TextInput
        style={styles.input}
        placeholder="Adjective"
        value={word1}
        onChangeText={(text) => setWord1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={word2}
        onChangeText={(text) => setWord2(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Verb"
        value={word3}
        onChangeText={(text) => setWord3(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Animal"
        value={word4}
        onChangeText={(text) => setWord4(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Place"
        value={word5}
        onChangeText={(text) => setWord5(text)}
      />
      <Button title="Generate Story" onPress={generateStory} />
      <Text style={styles.storyLabel}>Your Story:</Text>
      <Text style={styles.storyText}>{story}</Text>
    </ScrollView>
     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'blue',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  storyLabel: {
    fontSize: 18,
    marginTop: 20,
  },
  storyText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    
  },
  image: {
    width: '100%',
    height: 380, 
  },

});

export default StoryFillerApp;
