import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: string;

  @Column()
  description: string;

  @Column()
  urlImg: string;

  @Column()
//   @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  // tslint:disable-next-line:variable-name
  public createDate: string;

  /**
   * #British Name: update_date
   * #Use Explanation:Record updated day and hour.
   * #Type: string
   * #Indispensability: true
   */
//   @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  @Column()
  // tslint:disable-next-line:variable-name
  public updateDate: string;

}