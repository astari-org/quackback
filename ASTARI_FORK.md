# Astari fork of Quackback

This fork runs the feature-suggestion boards for both brands.

- Deploy branch: `deploy` (push = auto-deploy). `main` is the upstream-tracking branch.
- Railway project `suggest-feature`:
  - `quackback-astari` → suggest.astariapp.com (`postgres-astari`, `bucket-astari`)
  - `quackback-seneka` → suggest.myseneka.com (`postgres-seneka`, `bucket-seneka`)
- Naming rule: Railway services and buckets are `<component>-<brand>`.
