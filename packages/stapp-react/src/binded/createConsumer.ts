import { Component, ComponentClass, createElement } from 'react'
import { consumerPropTypes } from '../helpers/propTypes'
import { StappSubscription } from '../helpers/StappSubscription'

// Models
import { Stapp } from 'stapp'
import { ConsumerProps } from '../models/Props'

export const createConsumer = <State, Api>(
  app: Stapp<State, Api>,
  name: string = 'Stapp'
): ComponentClass<ConsumerProps<State, Api, any>> => {
  return class Consumer extends Component<ConsumerProps<State, Api, any>> {
    static displayName = `${name}.Consumer`
    static propTypes: any = consumerPropTypes

    render() {
      return createElement(StappSubscription, {
        ...this.props,
        app
      })
    }
  }
}
