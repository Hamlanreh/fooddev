import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
    const menus = [
        {
            id: 1,
            name: "Jollof rice and chicken",
            description: "Lorem ipsum dolor sit amet devis dsas dseesf",
            price: "40",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHufSaz4Dvv956gRPzRJVFyrxMvqTtwZgMDlMKZ7wF7NnFqBj0nl1877Mmw0Dpw49fSU&usqp=CAU"
        },
        {
            id: 2,
            name: "Pepper soup",
            description: "Lorem ipsum dolor sit amet devis dsas dseesf",
            price: "30",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIqUEHagkFlBkpjIuJ-rYTAlx20_12KHHzhvrWJXc5rXZwAmAlxlOvURm2nuWUNmHD7g&usqp=CAU"
        },
        {
            id: 3,
            name: "Amala (Yam flour)",
            description: "Lorem ipsum dolor sit amet devis dsas dseesf",
            price: "45",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8tH-n9VDReAWOXOUF8fyu2SL6ZKJnoD4VxY3_N4ldBnOW8tQicHgkY4rHpKL8iD27aXY&usqp=CAU"
        },
        {
            id: 4,
            name: "Eba",
            description: "Lorem ipsum dolor sit amet devis dsas dseesf",
            price: "35",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaP0umbjSzbt5J1jGmvfvgIxfTeRPp9_edNXrwrdVd2YueMghXh1XCHKCdemcblUrqlY0&usqp=CAU"
        },
        {
            id: 5,
            name: "fufu",
            description: "Lorem ipsum dolor sit amet devis dsas dseesf",
            price: "40",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zDSBn3HZK-VM8-nvkv-9iJ1XhySK_ZBN4PGAPIrNjMUyRN3THRd4_hpzCkCEGxcQAMo&usqp=CAU"
        },
        {
            id: 6,
            name: "Moi Moi",
            description: "Lorem ipsum dolor sit amet devis dsas dseesf",
            price: "25",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2jdL5frj0TUjqBwuCGLY2e2_q8E2M20dFTSOGV_9N0etynHF_TUF34if7amV27a_V84&usqp=CAU"
        },
        {
            id: 7,
            name: "Suya (Meat and chicken)",
            description: "Lorem ipsum dolor sit amet devis dsas dseesf",
            price: "55",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYN5df93QCf7LB5kybS3L68quNl5Hsibzy-sdBkWgktR0punQo_uOokmnA1WmEMP5LI4&usqp=CAU"
        },
        {
            id: 8,
            name: "Porridge",
            description: "Lorem ipsum dolor sit amet devis dsas dseesf",
            price: "45",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSUKc5a-LrFJfKltyCscUNDLDiDN-imFmkdLDrASTOpXDzIVJeG_0lW0ilwApS-XW1vc&usqp=CAU"
        }
    ];
    
    
    return NextResponse.json({ menus });
}