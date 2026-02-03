export interface OptionItem {
  value: string | number;
  label: string | number;
}

export interface optionCheckBox extends Array<string | number> {}

export interface yldataType extends OptionItem {
  color: string,
  xzyf: boolean
}

export type NumberOrString = string | number;
