/**
  * Created by gary_ on 2017-01-26.
  */
import week7.WaterPouring
class Solution {
  def main(args:Array[String]):Unit = {
    //9oz et 4oz verres
    val problem = new WaterPouring(Vector(9,4))

    //Solution si la solution recherche est de 6oz
    problem.solutions(6).foreach(println)
  }

}
