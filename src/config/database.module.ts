/**
 * Copyright (c) 2020 OMRON HEALTHCARE Co.,Ltd. All rights reserved.
 */
 import { DynamicModule, Global, Module } from '@nestjs/common';
 import { TypeOrmModule } from '@nestjs/typeorm';
 import * as dotenv from 'dotenv';
 import * as fs from 'fs';
 import * as path from 'path';
 import { ConfigModule } from './config.module';
 
 async function DatabaseOrmModule(): Promise<DynamicModule> {
    await dotenv.config();
    const environment = process.env.NODE_ENV;
    const envFile = path.resolve(__dirname, '../../../config', `${environment}.env`);
    console.log(envFile)
    const envConfig = dotenv.parse(fs.readFileSync(envFile));
 
   Object.keys(envConfig).forEach(key => {
     process.env[key] = envConfig[key];
   });
 
   return TypeOrmModule.forRoot({
    type: 'mysql',
        host: process.env.HOST,
        port: +process.env.PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
   });
 }
 
 @Global()
 @Module({
   imports: [ConfigModule.register(), DatabaseOrmModule()],
 })
 export class DatabaseModule { }
 