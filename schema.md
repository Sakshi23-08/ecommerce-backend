# SCHEMAS

- ## User
    -firstName : String
    -lastName : String
    -email : String
    -Password : String (Hashed)
    -Address : [
        -Address (from addeess schema)
    ]
    -Orders: [
        {
            address: Address (from addeess schema)
        }
    ]

- ## Product
    -name : String
    -StickerPrice : Number
    -markedPrice : Number
    -category : Category (from category schema )
    -image : String (URL)
    -compatibleWith : [ "iPhone13", "iPhone12", "Apple Watch"]
    -stock : Number
    -Color : String
    -weight : String,
    -mfd : Number (year manufactured in)

- ## Category
    -name : String
    -description : String

- ## Order
    -address: Address (from address schema)
    -user: User (from User Schema)
    -products : [
        products: Product (from Product Schema)
    ]
    -total : Number
    -status : [ "payment_pending", "payment success", "payment_errored"]

- ## Address
            -houseNumber: String
            -fullAddress: String
            -landmark: String