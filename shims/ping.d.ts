declare module 'ping.js' {
  export type CallbackFunc = (err: boolean, ping: number) => void;
  export type PingFunc = (source: string, cb?: CallbackFunc) => void;
  export default class Ping {
    ping: PingFunc;
  }
}
