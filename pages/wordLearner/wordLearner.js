// pages/wordLearner.js
Component({
  data:{
    isResult: 1,
    resultList: [
      {
        "id": 0,
        "definition": "Extending far down from the top or surface.",
        "examples": [
          "The ocean is incredibly deep in some areas.",
          "They dug a deep hole to plant the tree.",
          "The well was so deep that no one could see the bottom.",
          "She dived into the deep end of the pool.",
          "The submarine explored the deep trenches of the sea."
        ]
      },
      {
        "id": 1,
        "definition": "Very intense or extreme.",
        "examples": [
          "He fell into a deep sleep after the long journey.",
          "The team was in deep trouble after losing their star player.",
          "She felt a deep sense of gratitude for their help.",
          "The country was in a deep economic crisis.",
          "His deep love for her was evident in every gesture."
        ]
      },
      {
        "id": 2,
        "definition": "Profound or difficult to understand.",
        "examples": [
          "The philosopher's ideas were too deep for most people to grasp.",
          "The book delves into deep questions about the meaning of life.",
          "Her poetry is known for its deep and complex themes.",
          "The scientist presented a deep analysis of the data.",
          "The movie had a deep message about human nature."
        ]
      },
      {
        "id": 3,
        "definition": "Situated far back or inwards.",
        "examples": [
          "The treasure was hidden deep within the cave.",
          "The pain was deep inside his chest.",
          "The village was located deep in the forest.",
          "She kept her feelings deep within her heart.",
          "The roots of the tree extended deep into the ground."
        ]
      },
      {
        "id": 4,
        "definition": "Low in pitch or tone.",
        "examples": [
          "He has a deep, resonant voice that commands attention.",
          "The deep sound of the bass guitar filled the room.",
          "She sang the low notes with a deep, rich tone.",
          "The thunder rumbled with a deep growl.",
          "The actor's deep voice was perfect for the narration."
        ]
      },
      {
        "id": 5,
        "definition": "Involved or immersed in a particular activity or state.",
        "examples": [
          "He was deep in thought and didn't hear the doorbell.",
          "She was deep in conversation with her friend.",
          "The company is deep in negotiations with the union.",
          "They were deep in debt after the failed venture.",
          "The detective was deep in the investigation of the case."
        ]
      },
      {
        "id": 6,
        "definition": "Rich or intense in color.",
        "examples": [
          "The sky was a deep blue at sunset.",
          "She wore a dress of deep red to the party.",
          "The painting featured deep shades of green and gold.",
          "The deep purple of the flowers stood out in the garden.",
          "His eyes were a deep brown, almost black."
        ]
      },
      {
        "id": 7,
        "definition": "Far advanced in time or progress.",
        "examples": [
          "It was deep into the night when they finally arrived.",
          "The project is deep in its final stages.",
          "By the time we left, the party was deep into the early hours.",
          "The novel is set deep in the 19th century.",
          "The team was deep into the playoffs when they faced their toughest opponent."
        ]
      }
    ],
  },
  methods: {
    onBack() {
      wx.navigateBack();
    },
    onGoHome() {
      wx.reLaunch({
        url: '/pages/index/index',
      });
    },
  },
});