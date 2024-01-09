// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const quotes = [
  [
    {
      type: 'intro',
      message: 'Life is the understanding of a holy spirit in yourself; a holy spirit which is put into some limits',
    },
    {
      type: 'quote',
      message: 'The only clear and final truth is the truth of conscience.',
      author: 'RENÉ DESCARTES'
    },
    {
      type: 'message',
      italics: true,
      message: 'Under my feet, there is cold frozen earth; around me huge trees are standing; above my head is the foggy cold sky. I feel my body, I feel my mind occupied with various thoughts. And at the same time I know that all these things, all this frosted cold earth, and the trees, and the sky, and my body, and my thoughts, this is all created by chance, this is a temporary world, the creation of my five senses. The world created by me exists only because I am part of it, and therefore, I separate myself from the world. I know that I could die, but the world will not disappear.'
    },
    {
      type: 'message',
      italics: true,
      message: 'Death will make some changes in me, and while I will not be completely destroyed, I will become another being, separate from this world. Now, at present, I understand myself; then, something different altogether will happen to my inner self. And there can be a limitless number of such beings, which exist separately from this world.'
    },
    {
      type: 'message',
      italics: true,
      message: 'Our life is our limited understanding of this eternal and limitless spirit which knows no constraints in time and space and which is not bound by any spatial or timely events.'
    },
    {
      type: 'message',
      italics: true,
      message: 'The human conscience is a divine conscience.'
    }
  ],
  [
    {
      type: 'intro',
      message: 'Our land, like our character, cannot be the object of buying and selling. Behind the buying and selling of earth is the hidden process of buying and selling a personality.',
    },
    {
      type: 'quote',
      message: 'Earth is the great gift which nature gave to people, and the birth of every person in this world should give him the right to possess this earth. And this right should be as natural as the right of a person to have the breast of his mother.',
      author: 'JEAN FRANÇOIS MARMONTEL'
    },
    {
      type: 'message',
      italics: true,
      message: 'A person in our society cannot sleep without paying for the place where he sleeps; he has the right to have free air or water or sunlight only when he is on the road. The only right he has is to walk along this road; until he becomes tired, or he cannot walk, he has to continue walking.'
    },
    {
      type: 'quote',
      message: 'The bodies of men and women, and even more importantly, their children, should not be bought and sold. So too the water, the land and air, because these things are necessary conditions of this existence.',
      author: 'JOHN RUSKIN'
    },
    {
      type: 'message',
      italics: true,
      message: 'People strive in this world, not for those things which are truly good, but for the possession of many things which they can call their property.'
    },
  ],
]


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.progressIndicators}>
        {quotes[0].map((subquote, index) => {
          const width = Math.floor((100 / quotes[0].length) - 2).toString() + '%';
          return <View key={`indicator${index}`} style={styles.progressIndicatorBar(width)} />
        })}
      </View>
      <View style={styles.contentContainer}>
        {quotes[0].map((subquote, index) => {
          const width = Math.floor((100 / quotes[0].length) - 2).toString() + '%';
          return <Text key={`content${index}`} style={styles.text}>{subquote.message}</Text>
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    width: '100%',
    flex: 1,
  },
  progressIndicators: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  progressIndicatorBar: (width) => ({
    height: 4,
    backgroundColor: '#fff',
    width,
  }),
  text: {
    color: '#fff',
  }
});
