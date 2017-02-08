import {ICable} from "../Models/ICable";
import {ICombiner} from "../Models/ICombiner";
export class Combiner implements ICombiner
{
	input:ICable[];
	output:ICable;
	attenuation:number;
}