import { atom } from 'jotai'

//Glibal couter
export const counterAtom = atom(0);

//Global FishPerSec
export const fishPerSecAtom = atom(0);

//Global singel press
export const press = atom(10000000);

//Global Feeder
export const FeederAmount = atom(0);

//Global Automatic FisherMan
export const FisherManAmount= atom(0);

//Global Auto FishFarm
export const FishFarmAmount = atom(0);

//Global Auto Fish Incuabtor
export const IncubatorAmount = atom(0);

//Global Fish Facory
export const FishFactoryAmount = atom(0);

//Global Image Sets
export const sets = atom({
    default: require('../../img/Fish_Default.png'),
    feeder: require('../../img/Fish_Feeder.png'),
    fisherman: require('../../img/Fish_Fisherman.png'),
    fishfarm: require('../../img/Fish_Fishfarm.png'),
    incubator: require('../../img/Fish_Incubator.png'),
    factory: require('../../img/Fish_Factory.png')
});
