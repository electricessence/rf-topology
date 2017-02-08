import {ICable} from "./ICable";
import {IAttenuate} from "./IAttenuate";
import {IEmitter} from "./IEmitter";
import {IReceptacle} from "./IReceptacle";
export interface ICombiner extends IAttenuate, IEmitter, IReceptacle
{
	input:ICable[];
	output:ICable;
}