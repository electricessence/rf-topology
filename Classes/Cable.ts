import {ICable} from "../Models/ICable";
import {CableType} from "../Models/CableType";
import {LengthUnit} from "../Models/LengthUnit";
import {IEmitter} from "../Models/IEmitter";
import {IReceptacle} from "../Models/IReceptacle";
export class Cable implements ICable
{
	input:IEmitter;
	output:IReceptacle;

	type:CableType;
	length:LengthUnit;
	attenuation:number;

}