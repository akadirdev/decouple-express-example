import { BindingScope, injectable } from "@decouplejs/core";

@injectable(BindingScope.SINGLETON)
export class LogService {
  log(msg: string) {
    console.log(msg);
  }
}
