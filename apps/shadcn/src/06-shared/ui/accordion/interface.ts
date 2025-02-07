export type AccordionItemProps = {
  title?: string
  disabled?: boolean
}

export type AccordionItem = {
  title: AccordionItemProps['title']
  content: string
  disabled?: boolean
}

export type AccordionProps = {
  multiple?: boolean
  data?: AccordionItem[]
}
