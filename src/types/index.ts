export type BettingData = {
  isSuccess: boolean
  data: {
    spg: SPG[]
    stm: STM[]
  }
  message: string
  error: null | Error
  info: null | string
  date: null | string | Date
}

export type SPG = {
  eventGroup: EventGroup[]
  competitionId: number
  groupName: string
  mukList: string[]
  marketHeader: MarketHeader[]
}

export type STM = {
  eventGroup: EventGroup[]
  competitionId: number
  groupName: string
  mukList: string[]
  marketHeader: MarketHeader[]
}

export type EventGroup = {
  eventResponse: EventResponse[]
  groupName: string
  cn: string | null
}

export type EventResponse = {
  sid: number
  eid: number
  ev: number
  cn: string
  e: string
  ed: number
  ede: string
  edh: string
  en: string
  mb: number | null
  es: number
  live: boolean
  mc: number
  cnid: string
  cnn: string
  bid: number
  m: Market[]
  pt: number
  cgid: number
  eprt: EventPart[]
  betting: boolean
  muklist: string[]
  edgn: string
  spc: SpecialCase | null
  cgn: string
  iskbet: boolean
  skbet: number
  kblive: boolean
  kbodd: boolean
  kbmbs: boolean
  cref: number
  cgref: number
  iirm: boolean
  hasduel: boolean
  iso: boolean
}

export type Market = {
  mid: number
  mv: number
  mn: string
  muk: string
  mbs: number
  ms: number
  mno: null | unknown
  o: Option[]
  irp: boolean
  inm: boolean
}

export type Option = {
  ou: null | unknown
  ono: number
  odd: null | unknown
  sodd: string
  ona: string
  ov: number
  cs: null | unknown
  spo: boolean
  oodd: null | unknown
  state: boolean
  sona: null | unknown
  wodd: null | unknown
}

export type MarketHeader = {
  mn: string
  ona: string[]
}

export type EventPart = {
  acr: string
  pn: string
}

export type SpecialCase = {
  sid: number
  eid: number
  sc: string
  min: string
  date: string
  ssc: null | unknown
  spt: null | unknown
  sptm: string
  st: string
  bid: number
  gc: null | unknown
  hrc: number
  arc: number
  pss: null | unknown
}
