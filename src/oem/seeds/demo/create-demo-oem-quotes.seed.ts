import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import * as moment from 'moment-timezone';

import { OemQuoteEntity } from '../../main/oem-quotes/oem-quote.entity';
import { QuoteStatusEnum } from '../../main/oem-quotes/oem-quote.enums/quote-status.enum';
import { DealTypeEnum } from '../../main/oem-quotes/oem-quote.enums/deal-type.enum';
import { seedEntities } from '../../../utils/seed-factory.util';

export default ({ companyId = 1 }: { companyId?: number }) =>
  class CreateDemoOemQuotes implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
      const quotes: Partial<OemQuoteEntity>[] = [
        {
          ownerUserId: 2,
          companyId,
          customerId: null,
          geoHierarchyId: 1,
          quoteUuid: 'Q-5',
          opportunityId: null,
          quoteName: 'Test 1601',
          netAmount: 0,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-01-20 00:00:00.000000 +00:00').toDate(),
          submittedAt: null,
          pdfFileUrl: null,
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: true,
          isEnabled: false,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: null,
          geoHierarchyId: 1,
          quoteUuid: 'Q-4',
          opportunityId: null,
          quoteName: 'TestRule',
          netAmount: 148744657.1,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-01-19 00:00:00.000000 +00:00').toDate(),
          submittedAt: moment.utc('2023-01-15 20:08:22.681000 +00:00').toDate(),
          pdfFileUrl: null,
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: true,
          isEnabled: false,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: null,
          geoHierarchyId: 1,
          quoteUuid: 'Q-3',
          opportunityId: null,
          quoteName: 'test',
          netAmount: 0,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-01-18 00:00:00.000000 +00:00').toDate(),
          submittedAt: null,
          pdfFileUrl: null,
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: true,
          isEnabled: false,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: null,
          geoHierarchyId: 1,
          quoteUuid: 'Q-2',
          opportunityId: null,
          quoteName: 'test 2',
          netAmount: 0,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-01-18 00:00:00.000000 +00:00').toDate(),
          submittedAt: null,
          pdfFileUrl: null,
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: true,
          isEnabled: false,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-1',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'test',
          netAmount: 3147142.857,
          quoteStatus: QuoteStatusEnum.EXPIRED,
          dealType: DealTypeEnum.CHANNEL,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-01-17 00:00:00.000000 +00:00').toDate(),
          submittedAt: moment.utc('2023-01-17 04:10:51.289000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-1-4.pdf?Expires=1705371993&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS0xLTQucGRmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA1MzcxOTkzfX19XX0_&Signature=BXM-UwxFw4ZDy7glVHbHJjseo1YOEuf5xJoLnkBoBdCMSLf8scnsRsgoLtl4YM-Sbjs201aDvac2MEbRxJTFaItcjAiY7RJP8InEnMscWCTTy5iTQ2Vs5G-3DykKZW6TrXiZ~d56BToTV4DHzpKL538H0uebtrw9uEvU3VlI2UaM9UOZ5Qkrm1q9zhp0O8BjYGaXjz4KFZkx5mZ~AfZZ4B2QUmRGQ6DV9q~cVTqXcJ7MOVwVtoNCvvKQ9MtFDOjXl0em-MiAimvamCMH9PzUmVrrcIsZlfuBJ-tNYv~K1TLawNx8ZTgEHekL~wTbWSgP5F4pzMAraMYK3lD7WZcC-w__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: true,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: true,
          isEnabled: false,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-10',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'TestQuote3 - Clone from Q-8',
          netAmount: 58175,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: 'YESSS DEMO',
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-04-30 20:41:25.162000 +00:00').toDate(),
          submittedAt: moment.utc('2023-01-30 19:49:00.494000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-8-9.pdf?Expires=1706580888&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS04LTkucGRmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA2NTgwODg4fX19XX0_&Signature=TF0mD1SiatKyDfgySXJA6tk0cxCykX5UITkI1JUKoFQKw6GWyS8u7xguCPYrzwg6oE8HCwdW4Fr9zuMfBwNjX9wcyfqAQlmFWXr9vMx0QegJzdaFsg1ZldheM0iELbmh~Il9GMnlr2u-Ickiv99B8WCR~bV1UM1SI5O79G9VkzrKQ~ofQATGJ0T~kmSSN6nb9AO-X6zk7Oth4trY-4NcNiwi~jUAFAa181~9bZ1Uvuq6Tg9eWE9iDawlbvrP7PQgXdo5LHvpzbvsxMwv8q1w4~v4VfBitihZSouBQOwAG2VI3Bd-bgBYXpth26Cx-KAFpJJislxSlFiINHKSdPbUAQ__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: true,
          isEnabled: false,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-11',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'TestQuote2 - Clone from Q-7',
          netAmount: 53070,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.CHANNEL,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-04-30 20:41:49.191000 +00:00').toDate(),
          submittedAt: moment.utc('2023-01-18 02:00:09.932000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-7-5.pdf?Expires=1705474329&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS03LTUucGRmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA1NDc0MzI5fX19XX0_&Signature=p3E3wZULurT3uvcotWPq82VxdB8T9iMjCJduhl0ZM1hJO~zegoagJzyYPaU5bBSZ61R5fEMzVUux2vIovGrnkUdsoc3rTMcMxYlM9NzKnS1CD2KnSU70GWVBo~zBeylkiJUWEgp6TecIktQ7mW1MddJTS4nGNYsT3qGIn4mkMLh51Ndtc3Hzijwp9zzLhEXo9IJ0RRahaPOwk4lGb~zUWbs7grrIa8lylFuRLTn683nhbLNwHML4jvCuATdnBsjizcaYoPhvasg1fxlVcDaqbGv5YKUIpncBMnyPnUWG0dzN5O2TEv~ff483GdT6u-9u~1Xzgud2qBmIo8PInW00~g__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: false,
          isExternalHideUnit: true,
          isExternalHideContact: false,
          isEnabled: false,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-15',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'TestQuote3 - Clone from Q-8',
          netAmount: 58175,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: 'YESSS DEMO',
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-04-30 20:42:57.650000 +00:00').toDate(),
          submittedAt: moment.utc('2023-01-30 20:43:01.161000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-8-9.pdf?Expires=1706580888&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS04LTkucGRmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA2NTgwODg4fX19XX0_&Signature=TF0mD1SiatKyDfgySXJA6tk0cxCykX5UITkI1JUKoFQKw6GWyS8u7xguCPYrzwg6oE8HCwdW4Fr9zuMfBwNjX9wcyfqAQlmFWXr9vMx0QegJzdaFsg1ZldheM0iELbmh~Il9GMnlr2u-Ickiv99B8WCR~bV1UM1SI5O79G9VkzrKQ~ofQATGJ0T~kmSSN6nb9AO-X6zk7Oth4trY-4NcNiwi~jUAFAa181~9bZ1Uvuq6Tg9eWE9iDawlbvrP7PQgXdo5LHvpzbvsxMwv8q1w4~v4VfBitihZSouBQOwAG2VI3Bd-bgBYXpth26Cx-KAFpJJislxSlFiINHKSdPbUAQ__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: true,
          isEnabled: false,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-6',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'TestQuote1',
          netAmount: 65083.03,
          quoteStatus: QuoteStatusEnum.PENDING_INTERNAL_APPROVAL,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2024-02-08 00:00:00.000000 +00:00').toDate(),
          submittedAt: moment.utc('2023-02-07 06:24:53.193000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-6-42.pdf?Expires=1707287095&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS02LTQyLnBkZiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcwNzI4NzA5NX19fV19&Signature=RsURCz6OCpnXIXAeF2TswJKQkfSySquuWWzkoSUkhw7yscTO9bcLTFjKjjGJLCONPqwpoR9KddJPDHDAAocBbQ9QJ2IhvpzJ2PiL7FGjDav5bZ7g5OOHQfAQ4QmfHB0OsmN4ZXel0bQDluFB1UClrPnqXDAejuMMmYA9yMcCx5y~VHZGX65vFm6EXpBh22sp6di24gKBJS1zX0yFsSIAlRzcFfE5nbT7jy3nosDJ1d45ds1VJpxePeSK6VK3IN8m0~Lp4scHOLUfigL4eA9kP-1dVNa8y1LJhl4oGG26pnwDKxSJem7gC0~K7r4PyfuwQNG8qtSQEz5NV9y1525ukg__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: false,
          isExternalHideUnit: true,
          isExternalHideContact: false,
          isEnabled: true,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-14',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'TestQuote2 - Clone from Q-7',
          netAmount: 53070,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.CHANNEL,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-04-30 20:42:35.383000 +00:00').toDate(),
          submittedAt: moment.utc('2023-01-18 02:00:09.932000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-7-5.pdf?Expires=1705474329&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS03LTUucGRmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA1NDc0MzI5fX19XX0_&Signature=p3E3wZULurT3uvcotWPq82VxdB8T9iMjCJduhl0ZM1hJO~zegoagJzyYPaU5bBSZ61R5fEMzVUux2vIovGrnkUdsoc3rTMcMxYlM9NzKnS1CD2KnSU70GWVBo~zBeylkiJUWEgp6TecIktQ7mW1MddJTS4nGNYsT3qGIn4mkMLh51Ndtc3Hzijwp9zzLhEXo9IJ0RRahaPOwk4lGb~zUWbs7grrIa8lylFuRLTn683nhbLNwHML4jvCuATdnBsjizcaYoPhvasg1fxlVcDaqbGv5YKUIpncBMnyPnUWG0dzN5O2TEv~ff483GdT6u-9u~1Xzgud2qBmIo8PInW00~g__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: false,
          isExternalHideUnit: true,
          isExternalHideContact: false,
          isEnabled: false,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-13',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'TestQuote2 - Clone from Q-7',
          netAmount: 53070,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.CHANNEL,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-04-30 20:42:17.588000 +00:00').toDate(),
          submittedAt: moment.utc('2023-01-18 02:00:09.932000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-7-5.pdf?Expires=1705474329&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS03LTUucGRmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA1NDc0MzI5fX19XX0_&Signature=p3E3wZULurT3uvcotWPq82VxdB8T9iMjCJduhl0ZM1hJO~zegoagJzyYPaU5bBSZ61R5fEMzVUux2vIovGrnkUdsoc3rTMcMxYlM9NzKnS1CD2KnSU70GWVBo~zBeylkiJUWEgp6TecIktQ7mW1MddJTS4nGNYsT3qGIn4mkMLh51Ndtc3Hzijwp9zzLhEXo9IJ0RRahaPOwk4lGb~zUWbs7grrIa8lylFuRLTn683nhbLNwHML4jvCuATdnBsjizcaYoPhvasg1fxlVcDaqbGv5YKUIpncBMnyPnUWG0dzN5O2TEv~ff483GdT6u-9u~1Xzgud2qBmIo8PInW00~g__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: false,
          isExternalHideUnit: true,
          isExternalHideContact: false,
          isEnabled: false,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-12',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'TestQuote3 - Clone from Q-8',
          netAmount: 58175,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: 'YESSS DEMO',
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-04-30 20:42:07.201000 +00:00').toDate(),
          submittedAt: moment.utc('2023-01-30 19:49:00.494000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-8-9.pdf?Expires=1706580888&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS04LTkucGRmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA2NTgwODg4fX19XX0_&Signature=TF0mD1SiatKyDfgySXJA6tk0cxCykX5UITkI1JUKoFQKw6GWyS8u7xguCPYrzwg6oE8HCwdW4Fr9zuMfBwNjX9wcyfqAQlmFWXr9vMx0QegJzdaFsg1ZldheM0iELbmh~Il9GMnlr2u-Ickiv99B8WCR~bV1UM1SI5O79G9VkzrKQ~ofQATGJ0T~kmSSN6nb9AO-X6zk7Oth4trY-4NcNiwi~jUAFAa181~9bZ1Uvuq6Tg9eWE9iDawlbvrP7PQgXdo5LHvpzbvsxMwv8q1w4~v4VfBitihZSouBQOwAG2VI3Bd-bgBYXpth26Cx-KAFpJJislxSlFiINHKSdPbUAQ__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: true,
          isEnabled: false,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-7',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'TestQuote2',
          netAmount: 53070,
          quoteStatus: QuoteStatusEnum.APPROVED,
          dealType: DealTypeEnum.CHANNEL,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-04-17 04:23:54.524000 +00:00').toDate(),
          submittedAt: moment.utc('2023-02-02 03:56:40.123000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-7-9.pdf?Expires=1706891286&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS03LTkucGRmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA2ODkxMjg2fX19XX0_&Signature=rriPAh9Cc0vUCI9P7-aDgEHrAKR3kw7wFZj4mQMT-qlzzol3aL15JX67236EvpvWEZatvFwvIdfexAT4BR5uIa7BCOromnXv~HjUtvOHA4viXlImJS0jthfqwD40h6wDm8EYRBrWLy7ghN02mcPx94TuzOR24bB8lgdoiOLjyV2frl~Gzn9sM-XaANEeCVGvkF4vhPuzR1H0H9CzUE~H-AZOjI8CroobgqC19ozBF0SPQ-K~o0R5Y5rE~sYBbCw5sq9QwT9rCDFH0e~jGlJPmcUlierXy907KNNaAdu7HLypIDLFzaMrjyuj3-uzA0EwDLJvobBP9Q4KRM-MItB~JQ__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: true,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: false,
          isExternalHideUnit: true,
          isExternalHideContact: false,
          isEnabled: true,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: null,
          geoHierarchyId: 1,
          quoteUuid: 'Q-17',
          opportunityId: null,
          quoteName: 'TestSaveNotice',
          netAmount: 45000,
          quoteStatus: QuoteStatusEnum.AUTO_APPROVED,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: '', value: false },
          ],
          expiresAt: moment.utc('2023-05-02 00:00:00.000000 +00:00').toDate(),
          submittedAt: moment.utc('2023-02-08 06:07:06.932000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-17-3.pdf?Expires=1707372431&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS0xNy0zLnBkZiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcwNzM3MjQzMX19fV19&Signature=C51yLks6DicThxI5fo-~k882rTewuXXrVmUdHuxde3-~f0LBW8qT7Nj~gUF71kdnPFbOXprYkJCoQZAMd7wVD1g-nBTSgyhLCSlvMD9-HKfAQWn07yJLFSuaWCw4jjM2u3G3BEUUWPB-LMFmuTEoa4V7dQuQ0j9XY0Uva~0uXKzpREcN2JpfYGThrKys2rfe36KtlEs1xmoqB9Jo5I9TEQ4Sc~GyNwfOrDyz8Hb~nv74S2GoJXF--KhMeFcCYBAve6Ab-SMkMUuM2A8ruN867rZBxgRZP3Oce9Proo3nWhHIYwPLSZRfFUieXG7rUmaJzcIuDWT~9B2P7esS-dknYQ__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: false,
          isEnabled: true,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-20',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'TestSend',
          netAmount: 57000,
          quoteStatus: QuoteStatusEnum.AUTO_APPROVED,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: 'YESSS DEMO',
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-05-09 04:38:10.700000 +00:00').toDate(),
          submittedAt: moment.utc('2023-02-08 06:06:35.073000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-20-2.pdf?Expires=1707372390&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS0yMC0yLnBkZiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcwNzM3MjM5MH19fV19&Signature=Qx9OlqGSGa83j3JtKm6cdZLeGsYV7Dic0-ZQc946Cn0ZcR49n4CGu5FVCifG1a0yi9aJpeSNnSS7ZKkt-fR9hskcQpS7lH9n6AvhZQBDzvGlnFev6kd7DBhSZSgkI5dljeJE-sab5D4lqU65KWq1ZcsrlBhWAJPEtX-fBGwe~dLdh24B-NB6IQ-cjm-3KY8nG0pcEOyHbJvA7oAt7eSDSjHIFFD--kqKHN1QqLlkuC5K25BwCyKN5ANruhjc46lQjw4SQyz588XijBsx-FbgDp9aRCZP11rqPryiX1tVWH~EG3WVYVJn8rmAm0Ne8xuavgjFLMlPCtbdm~2noV6QkQ__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: false,
          isEnabled: true,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: null,
          geoHierarchyId: 1,
          quoteUuid: 'Q-9',
          opportunityId: null,
          quoteName: 'AutoApproveTest',
          netAmount: 900,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: '', value: false },
          ],
          expiresAt: moment.utc('2023-04-30 00:00:00.000000 +00:00').toDate(),
          submittedAt: moment.utc('2023-02-07 04:07:10.130000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-9-4.pdf?Expires=1707271882&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS05LTQucGRmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA3MjcxODgyfX19XX0_&Signature=vJOLZtZytOvEbHCpxRSPsvhYZSyjzwJVxcuu2euitkzDVfaQSnYWkMBOjYYydG2HyRjoYWVUmcd0voPrd2C0ySFVYODQwtza~s4Zd-edAwQvCOoOsqJrEofeWzaMRNLJHVwMfXjkXY04cz6ACbRpOakRYuYkz2Kxj~raGgLojv46EoR-66VQmEwF6TOy1082zkOWdMEWRc4AwTwgzjpVv-bFcxQ3vSNOL-z3P3OL1wgxZBcih99F6EEwdjgtXH7BmYUmMDL8lpsZ5brbpKYK~0ObarhGVAO7ncZRq4liOJaIt4apno1BRn0CYmnzM0maWnOZ02t5-Aa1KqEH0WqgFQ__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: true,
          isEnabled: true,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: null,
          geoHierarchyId: 1,
          quoteUuid: 'Q-18',
          opportunityId: null,
          quoteName: 'this is a very loooooong quote nameeeeeeeeeeeee',
          netAmount: 0,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: '', value: false },
          ],
          expiresAt: moment.utc('2023-05-08 00:00:00.000000 +00:00').toDate(),
          submittedAt: null,
          pdfFileUrl: null,
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: true,
          isEnabled: true,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-19',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'another very looooooooooooooooooooooong quote name',
          netAmount: 0,
          quoteStatus: QuoteStatusEnum.DRAFT,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: '', value: false },
          ],
          expiresAt: moment.utc('2023-05-08 00:00:00.000000 +00:00').toDate(),
          submittedAt: moment.utc('2023-02-07 06:53:33.869000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-19-1.pdf?Expires=1707288492&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS0xOS0xLnBkZiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcwNzI4ODQ5Mn19fV19&Signature=ib297Qj10CP0VUv8r8oxaw5HVAoo9Wy21-209PLuUxkZLw~3g-iLhskxkPo9gLFIwuEUdNxeyqa5-2u1DeYuIgfl1ilpINp-9aFkxh~lfJ3f83~YZ6vMi4bq7bP5qyNEYILhLut478bMPIgbJ9w0IJ~E5ui4MMJBEaUTmv3kAyCCtGcgSCe-wsi~WBJzSlK~URcyUkorCCuZQ8yYoPHlImv5lmKs7~mR52UwdsVtRaD5vTcIcCqXFrCioOtPPgYlhh8uDbm-6u2kaIm2V~pNxqMX7tuQNU5UCAza-c-8IKxTGYkevZYm6j5aQIaEGwQHyG6DMHiT1Y3wzQ0MrYMaww__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: true,
          isEnabled: true,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 5,
          quoteUuid: 'Q-16',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'TestQuote1',
          netAmount: 29700,
          quoteStatus: QuoteStatusEnum.APPROVED,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: '', value: false },
          ],
          expiresAt: moment.utc('2023-05-01 00:00:00.000000 +00:00').toDate(),
          submittedAt: moment.utc('2023-01-31 19:02:35.351000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-16-9.pdf?Expires=1706925613&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS0xNi05LnBkZiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcwNjkyNTYxM319fV19&Signature=idjsnUpSKeO7CZlzbWeMQYhTMJU-83uvYjQ5TByWnRuTY4915j-B9HNExJY2uRP6nykfbMaDjYy7hb8vgZ7KpJDZRDeDteZjC~t3e46QMc3FAF1upKhDz6LQAtCShXTg4il9900EsTXtNdh3Bw~VwzEZ9yS-obXnpGykws4SrsLJO0Yqdaus8ZnIKWZ-zb9WP0hAdJpq1cPYrlsf3EX1yMat9D~jxaMSwQLTf4trqUZMUW8DJDjz4pXvf-~rHJeMejPAQTnG9niq14XKWBFI2AekVMFI6BSk7Leb5oP1WR5BBo8OeeQ8u0w-zdAITUT7CgsaAPNOwV~a6s5bb3Zm~w__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: true,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: true,
          isEnabled: true,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-8',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'TestQuote3',
          netAmount: 57000,
          quoteStatus: QuoteStatusEnum.AUTO_APPROVED,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: 'YESSS DEMO',
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: 'Custom Discount', value: false },
          ],
          expiresAt: moment.utc('2023-04-17 00:00:00.000000 +00:00').toDate(),
          submittedAt: moment.utc('2023-02-08 06:07:41.222000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-8-25.pdf?Expires=1707408493&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS04LTI1LnBkZiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcwNzQwODQ5M319fV19&Signature=b1rcssW1wSdIVOQDiTlUzMlux~HwczVePczhzM1oWt3CzfjptXJl4tv76Sbp0ltU8svceij42-ywoqGYafjVzLjn~5ceG12otebMXYTJ-z5nlRsBofnwGnI1aXH6BbrsW8HIPhVTC08XCJKOP7z20OeKlcm0Vh7sAdWpptz5wg0UsXnrNAyg5cVj4kyjgWb~3nxahToR-YJOr4pnOw-P-Ph8EbnLRSVi1F6P3tCMY9pH3q6yubTmqsONZtKLWUWj4oa5tDEsHg6mPzIdSAo7ipVMOhBtIFGBobHRSjRRwQEigI5MERqc8Ml8QhGK23J6yvJ7DFLosay8a0wzDlBNGA__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: false,
          isEnabled: true,
        },
        {
          ownerUserId: 2,
          companyId,
          customerId: 2,
          geoHierarchyId: 1,
          quoteUuid: 'Q-21',
          opportunityId: '0065f00000995z2AAA',
          quoteName: 'ExternalQuoteTest1',
          netAmount: 69825,
          quoteStatus: QuoteStatusEnum.AUTO_APPROVED,
          dealType: DealTypeEnum.DIRECT,
          currency: 'USD',
          quoteComments: null,
          quoteInternalComments: null,
          quoteInternalCommentFiles: [],
          quoteAttributes: [
            { name: 'Net New', value: false },
            { name: 'Expansion', value: false },
            { name: 'Renewal', value: false },
            { name: 'Custom Billing', value: false },
            { name: '', value: false },
          ],
          expiresAt: moment.utc('2023-05-09 00:00:00.000000 +00:00').toDate(),
          submittedAt: moment.utc('2023-02-08 06:08:33.364000 +00:00').toDate(),
          pdfFileUrl:
            'https://files.vendori.com/pdf/Q-21-1.pdf?Expires=1707372518&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlcy52ZW5kb3JpLmNvbS9wZGYvUS0yMS0xLnBkZiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcwNzM3MjUxOH19fV19&Signature=m01-S6IpmniVTiaYN3ck6R5JqjFKXxZE-LRmP11~voJXxNWuutSReAqRp-F-p8h27f5VXsZidXu4bA1sX7z3vzfmckzzg4ObqouNA3IEBuCZC6LMw6L2ElnhUoCEsuf5iiIfAPrUium6r~35uoShiUvuVBlF9ouWSdxamAWRutgvObXSxf8pbtzqko03b3lpTiKs9QRu2cNiY6XOhM7hCdyjLGlb0g6rS0SFRakSa2zPuqn8VB7wEIZaYRUTihBy-y~nsl4TKIdojix0ICKKrFqIPnE~Q2hLhUPuyLG1laGxgF3099PySXkKBagzcGgP2p~Q~JARcSoISYwvfkffpQ__&Key-Pair-Id=K3W4UV0J4B6YE7',
          excelFileUrl: null,
          isExternal: false,
          isBlackBox: false,
          isAcceptingCreditCard: false,
          isRequiringSigning: true,
          isLocked: false,
          isDistributorVisible: false,
          isResellerVisible: false,
          isExternalHideInvoice: true,
          isExternalHideUnit: true,
          isExternalHideContact: false,
          isEnabled: true,
        },
      ];

      const quoteEntities = await seedEntities(
        connection,
        OemQuoteEntity,
        quotes,
      );

      return quoteEntities;
    }
  };