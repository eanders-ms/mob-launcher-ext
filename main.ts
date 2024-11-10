Entity.onEntityHitEntity(function (entity, otherEntity) {
    Entity.launch(otherEntity, Vector3.binop(entity.viewDirection, Vector3.directionPicker(OrderedDirection.Up), VecBinOp.Add))
})
