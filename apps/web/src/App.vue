<template>
  <div class="min-h-screen bg-background text-foreground">
    <Button size="sm">Click me </Button>
    <router-view />
  </div>
</template>

<script setup lang="ts">
// App root component
import { Button } from '@shadow/ui'
</script>
