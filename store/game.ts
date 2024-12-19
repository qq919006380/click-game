import { atom } from 'jotai';
import { Ball } from '@/types/ball';

export const scoreAtom = atom(0);
export const currentBallAtom = atom<Ball | null>(null);
export const inventoryAtom = atom<Ball[]>([]); 