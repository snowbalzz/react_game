import { atom, useAtom } from 'jotai'

export const counterAtom = atom(0);
export const fishPerSecAtom = atom(0);
export const press = atom(100);

export const sets = atom({
    default: require('../img/Fish_Default.png'),
    feeder: require('../img/Fish_Feeder.png'),
    fisherman: require('../img/Fish_Fisherman.png'),
    fishfarm: require('../img/Fish_Fishfarm.png'),
    incubator: require('../img/Fish_Incubator.png'),
    factory: require('../img/Fish_Factory.png')
});
