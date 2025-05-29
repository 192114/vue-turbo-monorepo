<template>
  <Story title="Components/Button">
    <Variant title="Default">
      <Button>Default Button</Button>
    </Variant>

    <Variant title="Variants">
      <div class="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </Variant>

    <Variant title="Sizes">
      <div class="flex flex-wrap items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <span class="i-lucide-plus h-4 w-4" />
        </Button>
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import Button from './Button.vue'
</script>
