export class GetText {
  constructor(private text: string) {}

  public stringLine = () => {
    return this.text.split("\n").length;
  };

  public stringEllipsis = (showLength: number) => {
    return this.text.length > showLength
      ? this.text.substring(0, showLength).concat("...")
      : this.text;
  };
}
