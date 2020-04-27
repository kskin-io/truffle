import * as React from "react";
import { ResultComponentProps, ResultComponentOptions } from "../types/ResultComponentProps";
import { Format } from "@truffle/codec";
import IDefaultComponent from "../types/IDefaultComponent";

export default class TupleComponent extends IDefaultComponent<Format.Values.TupleResult> {
  render() {
    const options = this.props.options || {} as ResultComponentOptions;
    const ContainerElement = options.container || "li";
    return (<ContainerElement>
      Special Things!
    </ContainerElement>);
  }

  public static isType = (props: ResultComponentProps<Format.Values.Result>): props is ResultComponentProps<Format.Values.TupleResult> => {
    return props.result.type.typeClass === "tuple";
  }
}