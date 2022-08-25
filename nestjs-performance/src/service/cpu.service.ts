import { Injectable } from '@nestjs/common';

@Injectable()
export class CpuService {
  constructor() {
    /* TODO document why this constructor is empty */
  }

  private fiboLog(n) {
    console.log('num:', 2);
    if (n < 2) return 1;
    else return this.fiboLog(n - 2) + this.fiboLog(n - 1);
  }

  private fibo(n) {
    if (n < 2) return 1;
    else return this.fibo(n - 2) + this.fibo(n - 1);
  }

  private fibonacci = (num) => {
    return Promise.resolve(this.fibo(num));
  };

  private fibonacciLog = (num) => {
    return Promise.resolve(this.fiboLog(num));
  };

  public powTanAtan = (num) => {
    return new Promise((resolve, reject) => {
      let result = 0;
      for (let i = Math.pow(num, 7); i >= 0; i--) {
        result += Math.atan(i) * Math.tan(i);
      }
      resolve(result);
    });
  };
}
