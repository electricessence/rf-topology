export enum LengthUnitType
{
	inches,
	feet
}

export interface LengthUnit
{
	value:number;
	type:LengthUnitType;
}