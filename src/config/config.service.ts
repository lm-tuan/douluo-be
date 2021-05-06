
 import { Injectable } from '@nestjs/common';
 import * as dotenv from 'dotenv';
 import * as fs from 'fs';
 import * as path from 'path';
 
 @Injectable()
 export class ConfigService {
     private readonly envConfig: any;
 
     constructor() {
         const environment = process.env.NODE_ENV;
         const envFile = path.resolve(__dirname, '../../../config', `${environment}.env`);
         this.envConfig = dotenv.parse(fs.readFileSync(envFile));
 
         Object.keys(this.envConfig).forEach(key => {
             process.env[key] = this.envConfig[key];
         });
     }
 
     get(key: string): string {
         return this.envConfig[key];
     }
 }
 