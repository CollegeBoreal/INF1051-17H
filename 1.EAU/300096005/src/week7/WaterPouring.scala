package week7

import com.sun.org.glassfish.external.amx.AMXGlassfish

/**
  * Created by gary_ on 2017-01-26.
  */
class WaterPouring(capacities: Vector[Int]) {

  /**
   * Inventaire
   */

  // Glass Indexes
  val glasses = 0 until capacities.length

  //Etats
  type State= Vector[Int]

  //Verser
  //Types de deplacement
  trait Pouring{
    def change (state: State): State
  }
  case class Empty(glass: Int) extends Pouring {
    def change(state:State):State =
      state updated (glass,0)
  }
  case class Fill(glass: Int) extends Pouring{
    override def change(state: State) =
      state updated(glass, capacities(glass))
  }
  case class Transfer(from: Int, to: Int) extends Pouring {
    def change(state: State): State = {
      val amount = state(from) min (capacities(to)) - state(to)
      state updated (from, state(from) - amount) updated (to, state(to) + amount)
    }
  }


}