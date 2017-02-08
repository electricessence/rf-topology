import {ISplitter} from "../Models/ISplitter";
import {ICable} from "../Models/ICable";
export class Splitter implements ISplitter
{
	input:ICable;
	output:ICable[];
	attenuation:number;
}