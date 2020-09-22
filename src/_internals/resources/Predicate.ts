import type { AdvancementType, MultiplePlayersArgument, PredicateType } from '@arguments'
import type { CommandsRoot } from '@commands'
import { toMcFunctionName as pathToResourceName } from '@datapack/minecraft'
import { ConditionClass } from '@variables'

export class Predicate extends ConditionClass {
  private commandsRoot

  private path

  private predicateJson

  constructor(commandsRoot: CommandsRoot, name: string, predicate: PredicateType) {
    super()

    this.commandsRoot = commandsRoot
    this.predicateJson = predicate

    const path = this.commandsRoot.Datapack.getResourcePath(name)

    this.path = path

    this.commandsRoot.Datapack.addResource(name, 'predicates', {
      predicate,
      children: new Map(),
      isResource: true,
      path: path.fullPathWithNamespace,
    })
  }

  get name(): string {
    return pathToResourceName(this.path.fullPathWithNamespace)
  }

  _toMinecraftCondition(): {value: any[]} {
    return {
      value: ['predicate', this.name],
    }
  }
}