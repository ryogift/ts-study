class Calc {
  readonly left: number;
  readonly right: number;

  constructor(left: number, right: number) {
    this.left = left;
    this.right = right;
  }

  add(): number {
    return this.left + this.right;
  }

  minus(): number {
    return this.left - this.right;
  }

  multiply(): number {
    return this.left * this.right;
  }

  divide(): number {
    return this.left / this.right;
  }
}

export default Calc;
