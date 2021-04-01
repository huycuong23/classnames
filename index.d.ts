// LICENSE is MIT
//
// Copyright (c) 2018
//   Dave Keen <http://www.keendevelopment.ch>
//   Adi Dahiya <https://github.com/adidahiya>
//   Jason Killian <https://github.com/JKillian>
//   Sean Kelley <https://github.com/seansfkelley>
//   Michal Adamczyk <https://github.com/mradamczyk>
//   Marvin Hagemeister <https://github.com/marvinhagemeister>

export type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;

export interface ClassDictionary
{
	[id: string]: boolean | undefined | null;
}

export interface ClassArray extends Array<ClassValue> {}

export function classNames(...args: ClassArray): string;

export default classNames;
