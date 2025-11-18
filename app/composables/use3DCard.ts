export function use3DCard(cardRef: Ref<HTMLElement | null>) {
  let card: HTMLElement | null = null

  const onMove = (e: MouseEvent) => {
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateY = (x / rect.width - 0.5) * 30
    const rotateX = -(y / rect.height - 0.5) * 30

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const onLeave = () => {
    if (!card) return
    card.style.transform = "rotateX(0deg) rotateY(0deg)"
  }

  onMounted(() => {
    card = cardRef.value
    if (!card) return

    card.addEventListener("mousemove", onMove)
    card.addEventListener("mouseleave", onLeave)
  })

  onBeforeUnmount(() => {
    if (!card) return
    card.removeEventListener("mousemove", onMove)
    card.removeEventListener("mouseleave", onLeave)
  })
}
