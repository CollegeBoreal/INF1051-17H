package models

import play.api.libs.json._
import slick.driver.MySQLDriver

case class Person(id: Long, name: String, age: Int)

object Person {
  
  implicit val personFormat = Json.format[Person]
}

//case class Person2(id: Long, name: String, age: Int)
//object Person2{
//  implicit val person2Format = Json.format[Person2]
//}