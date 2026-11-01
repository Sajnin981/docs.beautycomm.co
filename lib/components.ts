import { Card, CardGrid } from '@/components/markdown/card'
import { FileTree } from '@/components/markdown/filetree'
import { File, Folder } from '@/components/markdown/filetree/component'
import { Route } from '@/components/markdown/link'
import { MarkdownImage } from '@/components/markdown/markdown-image'
import { Mermaid } from '@/components/markdown/mermaid'
import { Note } from '@/components/markdown/note'
import { ReleaseEntry } from '@/components/markdown/release'
import { RoadmapItem } from '@/components/markdown/roadmap'
import { Screenshot } from '@/components/markdown/screenshot'
import { SectionCards } from '@/components/markdown/section-cards'
import { Step, StepItem } from '@/components/markdown/step'
import { Pre } from '@/components/ui/pre'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChangelogBrowser } from '@/components/product-updates/changelog-browser'
import { RoadmapBrowser } from '@/components/product-updates/roadmap-browser'

export const components = {
  a: Route,
  ChangelogBrowser,
  RoadmapBrowser,
  Card,
  CardGrid,
  FileTree,
  Folder,
  File,
  img: MarkdownImage,
  Mermaid,
  Note,
  pre: Pre,
  ReleaseEntry,
  RoadmapItem,
  Screenshot,
  SectionCards,
  Step,
  StepItem,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
}
