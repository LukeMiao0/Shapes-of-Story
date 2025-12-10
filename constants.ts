import { StoryShape, CaseStudy, RandomTopic } from './types';

export const STORY_SHAPES: StoryShape[] = [
  { id: 1, name: "白手起家 (Rise)", engName: "Rags to Riches", example: "例：《灰姑娘》前半段", path: "M5,45 Q50,45 95,5" },
  { id: 2, name: "由富到貧 (Fall)", engName: "Riches to Rags", example: "例：悲劇故事", path: "M5,5 Q50,5 95,45" },
  { id: 3, name: "洞中人 (Fall-Rise)", engName: "Man in a Hole", example: "例：《怪獸電力公司》", path: "M5,10 Q25,10 35,40 T65,40 T95,5" },
  { id: 4, name: "伊卡洛斯 (Rise-Fall)", engName: "Icarus", example: "例：《大亨小傳》", path: "M5,45 Q50,-10 95,45" },
  { id: 5, name: "灰姑娘 (Rise-Fall-Rise)", engName: "Cinderella", example: "例：《冰雪奇緣》", path: "M5,45 Q25,5 45,5 T65,45 T95,5" },
  { id: 6, name: "俄狄浦斯 (Fall-Rise-Fall)", engName: "Oedipus", example: "例：《教父》", path: "M5,5 Q25,45 50,25 T95,45" },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case1',
    title: '懸疑小品',
    icon: '👟',
    hook: '電梯門打開時，裡面只有一隻鞋。',
    conflict: '主角發現這鞋屬於失蹤的室友，且鞋尖有血跡。',
    resolution: '他聽到樓上傳來室友的聲音，卻喊著「快逃！」。'
  },
  {
    id: 'case2',
    title: '校園幽默',
    icon: '📝',
    hook: '老師宣布今天的考試題目只有一題。',
    conflict: '題目是「解釋人生的意義」。這是一個巨大的、不可能回答的衝突。',
    resolution: '一名學生只寫了一句：「這就是題目。」結果得了滿分。'
  },
  {
    id: 'case3',
    title: '溫馨成長',
    icon: '🎶',
    hook: '小女孩每天在公園練習吹笛子，卻總是跑調。',
    conflict: '她因受挫想放棄（內在衝突），但一位陌生老先生堅持每天來聽。',
    resolution: '多年後，她在同一個公園舉辦音樂會，第一排坐著那位老先生。'
  },
  {
    id: 'case4',
    title: '科幻短篇',
    icon: '👽',
    hook: '主角收到一封來自「十年後的自己」的電子郵件。',
    conflict: '郵件警告他今晚絕對不要搭上某班列車，但他已經在車上了。',
    resolution: '他發現車廂內空無一人，車窗外景物開始崩塌...'
  }
];

export const RANDOM_TOPICS: RandomTopic[] = [
  {
    title: "現代懸疑：被遺忘的手機",
    hook: "深夜走在無人的街道，路邊垃圾桶裡的一支手機突然響了...",
    hint: "衝突思考：接起來會聽到什麼？綁匪？還是來自未來的求救？"
  },
  {
    title: "奇幻驚悚：多出來的門",
    hook: "回到家時，你發現臥室原本空白的牆上，多了一扇從未見過的門...",
    hint: "衝突思考：門後是什麼？是你遺失的記憶？還是一個平行宇宙？"
  },
  {
    title: "校園生活：發錯的訊息",
    hook: "你在背後抱怨某個嚴格老師的訊息，不小心傳到了有老師在的班級大群組...",
    hint: "衝突思考：已讀不回？還是誠實道歉？隔天去學校會發生什麼災難？"
  },
  {
    title: "科幻超能力：暫停的世界",
    hook: "打噴嚏的一瞬間，你發現周遭所有人都靜止不動了，只有你能自由活動...",
    hint: "衝突思考：你會利用它做壞事還是好事？當時間恢復時會有什麼代價？"
  },
  {
    title: "溫馨寵物：開口的貓",
    hook: "當你對著家裡的貓嘆氣說「沒人懂我」時，貓突然回了一句：「我懂啊。」...",
    hint: "衝突思考：原來貓一直都在觀察人類。牠告訴了你什麼秘密？"
  }
];