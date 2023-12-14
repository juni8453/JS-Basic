class Country {
    name
    idolGroups

    constructor(name, idolGroups) {
        this.name = name;
        this.idolGroups = idolGroups;
    }
}

class IdolGroup {
    name
    members

    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}

class Idol {
    name
    year

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class MaleIdol extends Idol {
    sing() {
        return `${this.name}이 노래를 부릅니다.`
    }
}

class FemaleIdol extends Idol {
    dance() {
        return `${this.name}이 춤을 춥니다.`
    }
}

const iveMembers = [
    {
        name: '안유진',
        year: 2003
    },
    {
        name: '장원영',
        year: 2003
    },
    {
        name: '가을',
        year: 2002
    },
    {
        name: '레이',
        year: 2004   
    },
    {
        name: '리즈',
        year: 2003
    },
    {
        name: '이서',
        year: 2007
    }
]

const cIveMembers = iveMembers.map(x => 
    new FemaleIdol(x.name, x.year))
console.log(cIveMembers)

const iveGroup = new IdolGroup('Ive', cIveMembers)
console.log(iveGroup)

const korea = new Country('KOREA', [iveGroup])
console.log(korea)

const allTogether = new Country(
    'KOREA',
    [
        new IdolGroup(
            'Ive',
            iveMembers.map(x => 
                new FemaleIdol(x.name, x.year))
        )
    ]
) 
console.log(allTogether)