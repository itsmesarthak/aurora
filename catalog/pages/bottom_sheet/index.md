### BottomSheet

BottomSheet component.

### Props

```table
span: 6
rows:
  - Prop: children
    Type: node
    Default:
    Notes: Render as the BottomSheet's children
  - Prop: withCancelBtn
    Type: boolean
    Default: true
    Notes: Dictates whether to render the CancelButtonRow
  - Prop: ...props
    Type: any
    Default:
    Notes: Passes through any other props to underlying BottomSheetContent
```

```react
responsive: true
---

<ReactCSSTransitionGroup
    transitionName="bottom-sheet"
    component={Backdrop}
    transitionAppear
    transitionAppearTimeout={300}
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}
              >
    <BottomSheet>
     <ListRowOverflow>
      {sections.map(section =>
        <Section title={section.title} noOfColumns={MAX_COLUMNS / sections.length} key={section.key}>
          {section.items.map(item =>
          <SectionItem item={item} key={item.title}/>)}
        </Section>
        )}
    </ListRowOverflow>

  </BottomSheet>
</ReactCSSTransitionGroup>
```
