interface Example{
    name:string;
    age:number;
    id:string;
    organisationId:string;
    groupId:string;
}
type I=`${string}${"id"|"Id"}${string}`;

type OnlyIdKeys<T>={
    [P in keyof T as P extends I ?P :never]:T[P] ;
};

type N=OnlyIdKeys<Example>;

type U={
    id:string;
    organisationId:string;
    groupId:string;
}