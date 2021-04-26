const MovieGeners = [
  { value: 28, label: "动作" },
  { value: 12, label: "冒险" },
  { value: 16, label: "动画" },
  { value: 35, label: "喜剧" },
  { value: 80, label: "犯罪" },
  { value: 99, label: "纪录" },
  { value: 18, label: "剧情" },
  { value: 10751, label: "家庭" },
  { value: 14, label: "奇幻" },
  { value: 36, label: "历史" },
  { value: 27, label: "恐怖" },
  { value: 10402, label: "音乐" },
  { value: 9648, label: "悬疑" },
  { value: 10749, label: "爱情" },
  { value: 878, label: "科幻" },
  { value: 10770, label: "电视电影" },
  { value: 53, label: "惊悚" },
  { value: 10752, label: "战争" },
  { value: 37, label: "西部" },
];
const TVGeners = [
  { value: 10759, label: "动作冒险" },
  { value: 16, label: "动画" },
  { value: 35, label: "喜剧" },
  { value: 80, label: "犯罪" },
  { value: 99, label: "纪录" },
  { value: 18, label: "剧情" },
  { value: 10751, label: "家庭" },
  { value: 10762, label: "儿童" },
  { value: 9648, label: "悬疑" },
  { value: 10763, label: "新闻" },
  { value: 10764, label: "真人秀" },
  { value: 10765, label: "科幻" },
  { value: 10766, label: "肥皂剧" },
  { value: 10767, label: "脱口秀" },
  { value: 10768, label: "战争、政治" },
  { value: 37, label: "西部" },
];

const CountryMap = {
  AF: "阿富汗",
  AX: "奥兰",
  AL: "阿尔巴尼亚",
  DZ: "阿尔及利亚",
  AS: "美属萨摩亚",
  AD: "安道尔",
  AO: "安哥拉",
  AI: "安圭拉",
  AQ: "南极洲",
  AG: "安地卡及巴布达",
  AR: "阿根廷",
  AM: "亚美尼亚",
  AW: "阿鲁巴",
  AU: "澳大利亚",
  AT: "奥地利",
  AZ: "阿塞拜疆",
  BS: "巴哈马",
  BH: "巴林",
  BD: "孟加拉国",
  BB: "巴巴多斯",
  BY: "白俄罗斯",
  BE: "比利时",
  BZ: "伯利兹",
  BJ: "贝宁",
  BM: "百慕大",
  BT: "不丹",
  BO: "玻利维亚",
  BQ: "荷兰加勒比区",
  BA: "波黑",
  BW: "博茨瓦纳",
  BV: "布韦岛",
  BR: "巴西",
  IO: "英属印度洋领地",
  BN: "文莱",
  BG: "保加利亚",
  BF: "布吉纳法索",
  BI: "布隆迪",
  CV: "佛得角",
  KH: "柬埔寨",
  CM: "喀麦隆",
  CA: "加拿大",
  KY: "开曼群岛",
  CF: "中非",
  TD: "乍得",
  CL: "智利",
  CN: "中国",
  CX: "圣诞岛",
  CC: "科科斯（基林）群岛",
  CO: "哥伦比亚",
  KM: "科摩罗",
  CG: "刚果共和国",
  CD: "刚果民主共和国",
  CK: "库克群岛",
  CR: "哥斯达黎加",
  CI: "科特迪瓦",
  HR: "克罗地亚",
  CU: "古巴",
  CW: "库拉索",
  CY: "赛普勒斯",
  CZ: "捷克",
  DK: "丹麦",
  DJ: "吉布提",
  DM: "多米尼克",
  DO: "多米尼加",
  EC: "厄瓜多尔",
  EG: "埃及",
  SV: "萨尔瓦多",
  GQ: "赤道几内亚",
  ER: "厄立特里亚",
  EE: "爱沙尼亚",
  SZ: "斯威士兰",
  ET: "衣索比亚",
  FK: "福克兰群岛",
  FO: "法罗群岛",
  FJ: "斐济",
  FI: "芬兰",
  FR: "法国",
  GF: "法属圭亚那",
  PF: "法属玻里尼西亚",
  TF: "法属南部和南极领地",
  GA: "加彭",
  GM: "冈比亚",
  GE: "格鲁吉亚",
  DE: "德国",
  GH: "加纳",
  GI: "直布罗陀",
  GR: "希腊",
  GL: "格陵兰",
  GD: "格瑞那达",
  GP: "瓜德罗普",
  GU: "关岛",
  GT: "危地马拉",
  GG: "根西",
  GN: "几内亚",
  GW: "几内亚比绍",
  GY: "圭亚那",
  HT: "海地",
  HM: "赫德岛和麦克唐纳群岛",
  VA: "梵蒂冈",
  HN: "洪都拉斯",
  HK: "香港",
  HU: "匈牙利",
  IS: "冰岛",
  IN: "印度",
  ID: "印尼",
  IR: "伊朗",
  IQ: "伊拉克",
  IE: "爱尔兰",
  IM: "马恩岛",
  IL: "以色列",
  IT: "义大利",
  JM: "牙买加",
  JP: "日本",
  JE: "泽西",
  JO: "约旦",
  KZ: "哈萨克斯坦",
  KE: "肯尼亚",
  KI: "基里巴斯",
  KP: "朝鲜",
  KR: "韩国",
  KW: "科威特",
  KG: "吉尔吉斯斯坦",
  LA: "老挝",
  LV: "拉脱维亚",
  LB: "黎巴嫩",
  LS: "赖索托",
  LR: "利比里亚",
  LY: "利比亚",
  LI: "列支敦斯登",
  LT: "立陶宛",
  LU: "卢森堡",
  MO: "澳门",
  MG: "马达加斯加",
  MW: "马拉维",
  MY: "马来西亚",
  MV: "马尔地夫",
  ML: "马里",
  MT: "马尔他",
  MH: "马绍尔群岛",
  MQ: "马提尼克",
  MR: "毛里塔尼亚",
  MU: "模里西斯",
  YT: "马约特",
  MX: "墨西哥",
  FM: "密克罗尼西亚联邦",
  MD: "摩尔多瓦",
  MC: "摩纳哥",
  MN: "蒙古",
  ME: "蒙特内哥罗",
  MS: "蒙特塞拉特",
  MA: "摩洛哥",
  MZ: "莫桑比克",
  MM: "缅甸",
  nan: "纳米比亚",
  NR: "瑙鲁",
  NP: "尼泊尔",
  NL: "荷兰",
  NC: "新喀里多尼亚",
  NZ: "新西兰",
  NI: "尼加拉瓜",
  NE: "尼日尔",
  NG: "奈及利亚",
  NU: "纽埃",
  NF: "诺福克岛",
  MK: "北马其顿",
  MP: "北马里亚纳群岛",
  NO: "挪威",
  OM: "阿曼",
  PK: "巴基斯坦",
  PW: "帛琉",
  PS: "巴勒斯坦",
  PA: "巴拿马",
  PG: "巴布亚新几内亚",
  PY: "巴拉圭",
  PE: "秘鲁",
  PH: "菲律宾",
  PN: "皮特凯恩群岛",
  PL: "波兰",
  PT: "葡萄牙",
  PR: "波多黎各",
  QA: "卡塔尔",
  RE: "留尼旺",
  RO: "罗马尼亚",
  RU: "俄罗斯",
  RW: "卢旺达",
  BL: "圣巴泰勒米",
  SH: "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
  KN: "圣基茨和尼维斯",
  LC: "圣卢西亚",
  MF: "法属圣马丁",
  PM: "圣皮埃尔和密克隆",
  VC: "圣文森特和格林纳丁斯",
  WS: "萨摩亚",
  SM: "圣马力诺",
  ST: "圣多美和普林西比",
  SA: "沙乌地阿拉伯",
  SN: "塞内加尔",
  RS: "塞尔维亚",
  SC: "塞舌尔",
  SL: "塞拉利昂",
  SG: "新加坡",
  SX: "荷属圣马丁",
  SK: "斯洛伐克",
  SI: "斯洛维尼亚",
  SB: "所罗门群岛",
  SO: "索马利亚",
  ZA: "南非",
  GS: "南乔治亚和南桑威奇群岛",
  SS: "南苏丹",
  ES: "西班牙",
  LK: "斯里兰卡",
  SD: "苏丹",
  SR: "苏里南",
  SJ: "斯瓦尔巴和扬马延",
  SE: "瑞典",
  CH: "瑞士",
  SY: "叙利亚",
  TW: "中国台湾省",
  TJ: "塔吉克斯坦",
  TZ: "坦桑尼亚",
  TH: "泰国",
  TL: "东帝汶",
  TG: "多哥",
  TK: "托克劳",
  TO: "汤加",
  TT: "千里达及托巴哥",
  TN: "突尼西亚",
  TR: "土耳其",
  TM: "土库曼斯坦",
  TC: "特克斯和凯科斯群岛",
  TV: "图瓦卢",
  UG: "乌干达",
  UA: "乌克兰",
  AE: "阿联酋",
  GB: "英国",
  US: "美国",
  UM: "美国本土外小岛屿",
  UY: "乌拉圭",
  UZ: "乌兹别克斯坦",
  VU: "瓦努阿图",
  VE: "委内瑞拉",
  VN: "越南",
  VG: "英属维尔京群岛",
  VI: "美属维尔京群岛",
  WF: "瓦利斯和富图纳",
  EH: "西撒哈拉",
  YE: "叶门",
  ZM: "尚比亚",
  ZW: "辛巴威",
};

module.exports = {
  CountryMap,
  MovieGeners,
  TVGeners,
};
